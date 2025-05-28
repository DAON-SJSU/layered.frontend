import { useState } from "react";
import * as _ from "./style";
import { colors } from "./data";
import { useLocation, useNavigate } from "react-router-dom";
import type { Emotion } from './data';

const Palette = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAdding, setIsAdding] = useState(false);
  const [stackedCubes, setStackedCubes] = useState<
    Array<{ name: string; cube: string; buttonColor: string }>
  >([]);

  // request props 받아오기
  const location = useLocation();
  const { request } = location.state || {};
  // console.log(request);

  // result로 가기 위함
  const navigate = useNavigate();

  // emotion 결과 내기 위한 state
  const [emotionRating, setEmotionRating] = useState<Emotion>({
    Anger: 0,
    Love: 0,
    Hope: 0,
    Excitement: 0,
    Calmness: 0,
    Sadness: 0,
    Loneliness: 0,
    Dream: 0
  });

  const handlePrevious = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? colors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev === colors.length - 1 ? 0 : prev + 1));
  };

  const handleAddColor = () => {
    if (stackedCubes.length < 8) {
      setIsAdding(true);
      const newCube = {
        name: colors[currentIndex].name,
        cube: colors[currentIndex].cube,
        buttonColor: colors[currentIndex].buttonColor,
      };
      setStackedCubes((prev) => [...prev, newCube]);
      setTimeout(() => {
        setIsAdding(false);
      }, 500);
      // console.log(stackedCubes);
    } else {
      alert("You can stack up to 8 cubes!");
    }
  };

  // 제출 버튼 클릭 이벤트핸들러
  const handleSubmit = () => {
    let next = { ...emotionRating };

    stackedCubes.forEach(({ name }) => {
      switch (name) {
        case "red":
          next.Anger += 1.0;
          next.Love += 0.4;
          next.Excitement += 0.9;
          next.Sadness += 0.1;
          next.Loneliness += 0.3;
          next.Dream += 0.1;
          break;
        case "yellow":
          next.Anger += 0.2;
          next.Love += 0.8;
          next.Hope += 1.0;
          next.Excitement += 0.9;
          next.Calmness += 0.2;
          next.Dream += 0.1;
          break;
        case "green":
          next.Love += 0.3;
          next.Hope += 0.7;
          next.Excitement += 0.4;
          next.Calmness += 1.0;
          next.Sadness += 0.1;
          next.Loneliness += 0.1;
          next.Dream += 0.2;
          break;
        case "blue":
          next.Anger += 0.2;
          next.Love += 0.1;
          next.Sadness += 1.0;
          next.Loneliness += 0.9;
          next.Dream += 0.7;
          break;
        case "gray":
          next.Calmness += 0.3;
          next.Sadness += 0.9;
          next.Loneliness += 1.0;
          next.Dream += 0.5;
          break;
      }
    });

    setEmotionRating(next);
    console.log(next);

    const maxEmotion = Object.entries(next)
      .reduce((max, [key, value]) => value > max.value ? { key, value } : max, { key: "", value: -Infinity })
      .key;

    navigate(`/result/${maxEmotion.toLowerCase()}`, { state: { request } });
  }

  const currentColor = colors[currentIndex];

  return (
    <_.Container>
      <_.MianBox>
        <_.TitleBox>
          <_.Choice>Choice</_.Choice>
          <_.ColorText
            style={{
              color: currentColor.textColor,
              transform: `translateX(${direction === "next" ? "100%" : "-100%"
                })`,
              animation: "slideIn 0.3s ease forwards",
            }}
          >
            Your Color, Today
          </_.ColorText>
        </_.TitleBox>
        <_.CubeSlider>
          <_.Icon_L onClick={handlePrevious}>Arrow_Back_IOS_new</_.Icon_L>
          <_.Cube
            key={currentIndex}
            src={currentColor.cube}
            style={{
              transform: `translateX(${direction === "next" ? "100%" : "-100%"
                })`,
              animation: "slideIn 0.3s ease forwards",
            }}
          />
          <_.Icon_L onClick={handleNext}>Arrow_Forward_IOS</_.Icon_L>
        </_.CubeSlider>
      </_.MianBox>

      <_.SelectedBox>
        <_.LeftButton onClick={() => setStackedCubes([])}>
          <_.Icon_S style={{ color: "white" }}>refresh</_.Icon_S>
        </_.LeftButton>

        <_.StackedCubesContainer>
          <_.StackedCubesRow>
            {stackedCubes.slice(4, 8).map((cube, index) => (
              <_.SmallCube
                key={index}
                src={cube.cube}
                style={{
                  marginLeft: index === 0 ? "0" : "-6px",
                  marginRight: index === 3 ? "0" : "-6px",
                  zIndex: stackedCubes.length - index,
                }}
              />
            ))}
          </_.StackedCubesRow>
          <_.StackedCubesRow>
            {stackedCubes.slice(0, 4).map((cube, index) => (
              <_.SmallCube
                key={index + 4}
                src={cube.cube}
                style={{
                  marginLeft: index === 0 ? "0" : "-6px",
                  marginRight: index === 3 ? "0" : "-6px",
                  zIndex: stackedCubes.length - (index + 4),
                }}
              />
            ))}
          </_.StackedCubesRow>
        </_.StackedCubesContainer>

        <_.RightButton
          onClick={() => setStackedCubes((prev) => prev.slice(0, -1))}
        >
          <_.Icon_S style={{ color: "white" }}>undo</_.Icon_S>
        </_.RightButton>
      </_.SelectedBox>

      <_.SubBox>
        <_.Card>
          <_.ColorText
            style={{
              color: currentColor.textColor,
              transform: `translateX(${direction === "next" ? "100%" : "-100%"
                })`,
              animation: "slideIn 0.3s ease forwards",
            }}
          >
            {currentColor.title}
          </_.ColorText>
          <_.Scripts
            style={{
              transform: `translateX(${direction === "next" ? "100%" : "-100%"
                })`,
              animation: "slideIn 0.3s ease forwards",
            }}
          >
            {currentColor.script}
          </_.Scripts>
        </_.Card>
        {
          stackedCubes.length < 8 ? (
            <_.AddButton
              style={{ backgroundColor: currentColor.buttonColor }}
              onClick={handleAddColor}
              className={isAdding ? "adding" : ""}
            >
              <_.ButtonText style={{ color: "white" }}>Add This Color</_.ButtonText>
              <_.Icon_S style={{ color: "white" }}>add</_.Icon_S>
            </_.AddButton>
          ) :
            (
              <_.AddButton
                style={{ backgroundColor: currentColor.buttonColor }}
                onClick={handleSubmit}
                className={isAdding ? "adding" : ""}
              >
                <_.ButtonText style={{ color: "white" }}>Submit</_.ButtonText>
                <_.Icon_S style={{ color: "white" }}>add</_.Icon_S>
              </_.AddButton>
            )
        }

      </_.SubBox>
    </_.Container>
  );
};

export default Palette;
