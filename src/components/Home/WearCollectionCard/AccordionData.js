import React, { useState } from "react";
import styles from "./accordion.module.css";
import { GiBookmarklet } from "react-icons/gi";
import { TbLock } from "react-icons/tb";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function AccordionData() {
  const [event, setEvent] = useState([
    {
      id: 1,
      show: false,
      title: "Elements and Structure",
      text:
        "Learn about HTML elements and structure, the building blocks of websites.",
      quiz: "Introduction to HTML",
      quiz2: "",
      project: "Block Letters",
      article: "Running Hello World Locally (Xcode & Terminal)",
      lesson: "Introduction to HTML",
    },
    {
      id: 2,
      show: false,
      title: "Variable",
      text: "Introduction to variables and basic data types.",
      quiz: "Variable",
      project: "Dog Years",
      lesson: "Variable",
      article: "",
    },
    {
      id: 3,
      show: false,
      title: "Conditional & Logic",
      text:
        " Learn how to develop complex programs in Swift with conditionals and logical operators.",
      quiz: "Conditionals",
      project: "Magic 8-Ball",
      lesson: "Conditionals",
      article: "",
    },
    {
      id: 4,
      show: false,
      title: "Loops",
      text: "Make the most repetitive tasks easier by learning Swift loops! ",
      quiz: "Loops",
      project: "Whale talk",
      lesson: "Loops",
      article: "Fizz Buzz",
    },
    {
      id: 5,
      show: false,
      title: "Array & Set",
      text:
        "Learn how to use Swift arrays and sets to keep your data organized.",
      quiz: "Arrays",
      project: "Palindrome",
      lesson: "Arrays",
      article: "",
    },
    {
      id: 6,
      show: false,
      title: "Dictionaries",
      text:
        "Learn how to store pairs of data using the dictionary collection type.",
      quiz: "Dictionaries",
      project: "Morse Decoder",
      article: "if-let-statement",
      lesson: "Dictionaries",
    },
    {
      id: 7,
      show: false,
      title: "Functions",
      text:
        "In this module, you will learn how to write and interact with functions in Swift. ",
      quiz: "Functions",
      project: "Rock,Paper,Scissors",
      lesson: "Functions",
      article: "",
    },
    {
      id: 8,
      show: false,
      title: "Structures",
      text: "Model everyday objects using structures!",
      quiz: "Structures",
      project: "Structures, Gym, Regimen",
      lesson: "Structures",
      article: "",
    },
    {
      id: 9,
      show: false,
      title: "Classes",
      text: " Model everyday objects using classes! ",
      quiz: "Classes",
      project: "Build a Pokedex",
      lesson: "Classes",
      article: "",
    },
  ]);
  const handleGetId = (getValue) => {
    setEvent((current) => {
      return current.map((data) => {
        if (data?.id == getValue) {
          return { ...data, show: !data.show };
        } else {
          return { ...data, show: false };
        } 
      });
    });
    console.log(getValue, "getValue");
  };
  return (
    <div>
      <div className="w-full h-[100vh] border border-red-500 overflow-x-auto">
        {event.map((data) => {
          return (
            <div
              className={`w-[350px] ${
                data.show ? "h-[350px] " : "h-[200px] "
              } duration-300 border rounded-lg border-1 border-gray-500  mt-5 overflow-hidden`}
            >
              <div className="h-[200px] p-5 rounded-lg border bg-slate-500 border-1 border-gray-500 flex flex-wrap content-around ">
                <div className="w-full border border-black">{data.title}</div>
                <div
                  onClick={() => handleGetId(data.id)}
                  className="w-full mt-5 flex justify-between border border-black"
                >
                  <span>Open</span>
                  <span>
                    <GiBookmarklet />
                  </span>
                </div>
              </div>
              <div
                className={`h-[150px] ${
                  data.show ? "mb-0" : "mb-[-300px]"
                } duration-200 bg-yellow-400 rounded-lg`}
              >
                {data?.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
