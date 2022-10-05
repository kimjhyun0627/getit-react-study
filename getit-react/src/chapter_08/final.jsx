import React from "react";
import { useState } from "react";

// 3. 함수 컴포넌트 이용하기
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;

// 클래스 컴포넌트 이용하기
/*
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        // 확인 여부를 저장하기 위해
        // state에 초깃값이 false인 isConfirmed변수를 가지고 있음
        this.state = {
            isConfirmed: false,
        };

        // this.handleConfirm = this.handleConfirm.bind(this);

    }

    // 1. 버튼의 onClick 이벤트를 처리하기 위한 이벤트 핸들러로
    // handleConfirm 함수를 만들어주기
    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    
    // 2. 클래스 필드 문법을 사용하여 ConfirmButton 컴포넌트의
    // 이벤트 핸들러를 변경하기
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;
*/