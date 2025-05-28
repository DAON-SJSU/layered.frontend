import { useState } from "react";
import * as _ from "./style";
import { colors } from "./data";

const Palette = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAdding, setIsAdding] = useState(false);
  const [stackedCubes, setStackedCubes] = useState<
    Array<{ name: string; cube: string; buttonColor: string }>
  >([]);

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
    } else {
      alert("You can stack up to 8 cubes!");
    }
  };

  const currentColor = colors[currentIndex];

  return (
    <_.Container>
      <_.MianBox>
        <_.TitleBox>
          <_.Choice>Choice</_.Choice>
          <_.ColorText
            style={{
              color: currentColor.textColor,
              transform: `translateX(${
                direction === "next" ? "100%" : "-100%"
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
              transform: `translateX(${
                direction === "next" ? "100%" : "-100%"
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
              transform: `translateX(${
                direction === "next" ? "100%" : "-100%"
              })`,
              animation: "slideIn 0.3s ease forwards",
            }}
          >
            {currentColor.title}
          </_.ColorText>
          <_.Scripts
            style={{
              transform: `translateX(${
                direction === "next" ? "100%" : "-100%"
              })`,
              animation: "slideIn 0.3s ease forwards",
            }}
          >
            {currentColor.script}
          </_.Scripts>
        </_.Card>
        <_.AddButton
          style={{ backgroundColor: currentColor.buttonColor }}
          onClick={handleAddColor}
          className={isAdding ? "adding" : ""}
        >
          <_.ButtonText style={{ color: "white" }}>Add This Color</_.ButtonText>
          <_.Icon_S style={{ color: "white" }}>add</_.Icon_S>
        </_.AddButton>
      </_.SubBox>
    </_.Container>
  );
};

export default Palette;
