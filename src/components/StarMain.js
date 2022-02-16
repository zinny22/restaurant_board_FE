import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#f68843",
    grey: "#a9a9a9"

};

const StarMain = (props) => {
    const stars = Array(5).fill(0)
    // 0으로된 배열 5개
    return (
      
            <ItemStyle>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={25}
                                color={props.score > index ? colors.orange : colors.grey}
                                style={{
                                    margin: "auto",
                                }}
                            />
                        )
                    })}
                </div>
            </ItemStyle>
      
    );
};
const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
        //나란히 놓겠다.
    }
}

const ItemStyle = styled.div`
    width: 20%;
    `;


export default StarMain;