import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "DB 팀플 회의가 있습니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        //주목! [앞으로 사용할 데이터를 state에 넣어서 초기화 해줌!]
        this.state = {
            notifications: [],
        }
    };

    //자바스크립트의 setInterval() 함수를 사용해 1초마다 정해진 작업을 수행
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                //주목! [state 업데이트 하기 위해서 setState()를 사용함!]
                this.setState({
                    notifications: notifications,
                });
            }
            else {
                //나중에 추가
                this.setState({
                    notifications: notifications,
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notifications) => {
                    return (
                        <Notification
                            key={notifications.id}
                            id={notifications.id}
                            message={notifications.message} />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
