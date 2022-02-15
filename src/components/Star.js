import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const Star = () => {
 
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    // 0으로된 배열 5개

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


  

    return (
        <Box>
            <ItemStyle>         
                     <div style={styles.stars}>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={25}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        margin: "auto",
                                        cursor: "pointer"
                                    }}
                                />
                            )
                        })}
                    </div>
            </ItemStyle>
        </Box>
    );
};

const styles = {
    stars: {
    display: "flex",
    flexDirection: "row",
    //나란히 놓겠다.
    }
}

const Box = styled.div`
    margin: auto; 
    `;

const ItemStyle = styled.div`
    width: 100%;
    `;


export default Star;