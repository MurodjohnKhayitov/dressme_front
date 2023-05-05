import React,{useState} from "react";
import { MenuClose, formArrowRightCircle, formPhone, person3D } from "../../../../../../assets/imgs";
import { Button, Modal } from 'antd';

export default function CreatePerson() {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    sex: false,
    seven: false,
    eight: false
  });
  const handleOneOpen = () => {
    setState({ ...state, one: true });
  };
  const handleOneClose = () => {
    setState({ ...state, one: false });
  };
  const handleTwoOpen = () => {
    setState({ ...state, two: true });
  };
  const handleTwoClose = () => {
    setState({ ...state, two: false });
  };
 
  return (
    <div>
      <div className="relative w-full h-[536px]  flex  justify-center ">
        {/* Make Body Img */}
        <div className="w-full h-full absolute  z-30   ">
          <div className="w-full h-full flex justify-center">
            <div className="w-[35%] h-full  flex pt-3 pb-[48px] flex-wrap content-between">
              {/* First */}
              <div className="w-full flex justify-end">
                <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  5
                </span>
              </div>
              <div className="w-full  flex justify-end pr-[20px]">
                <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  6
                </span>
              </div>
            </div>

            {/* Second */}
            <div className="w-[20%] h-full  flex flex-col  ">
              <div className="w-full flex justify-center mt-[107px]">
                <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  3
                </span>
              </div>
              <div className="w-full  flex justify-center  mt-[80px]">
                <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  4
                </span>
              </div>
            </div>

            {/* Third */}
            <div className="w-[35%]  h-full  flex flex-col  ">
              <div className="w-full flex justify-end mt-[22px]">
                <span onClick={handleOneOpen} className="pulse">
                  1
                </span>

                {/* <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">1</span> */}
              </div>
              <div className="w-full  flex justify-end mt-[106px]">
                <span onClick={handleTwoOpen} className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  2
                </span>
              </div>
              <div className="w-full flex justify-end mt-[188px]">
                <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  7
                </span>
              </div>
              <div className="w-full  flex justify-end mt-[12px]">
                <span className="w-8 h-8 border border-fullBlue rounded-full flex items-center justify-center bg-makeBodyBg">
                  8
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center">
          <img
            src={person3D}
            alt=""
            className="h-full  rounded-lg"
          />
        </div>
      </div>

      {/* Modal pages */}
      <div>
     {/* One */}
        <Modal
          open={state?.one}
          closable={false}
          footer={null}
        >
          <div className="w-full h-[200px] p-4 ">
            <div className="w-full flex justify-between items-center"> 
               <span className="text-black text-[22px]">1</span>
               <img onClick={handleOneClose} src={MenuClose} alt=""/>
            </div>
            <div>
            <div className="mt-1 w-full h-fit">
              <div className=" not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
                Номер телефона
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 bg-btnBgColor focus:bg-btnBgColor active:bg-btnBgColor placeholder:bg-btnBgColor placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                  type="text"
                  placeholder="Phone number"
                  required
                />
                <img src={formPhone} alt="" />
              </div>
            </div>
            <div
              onClick={() => {
                // setState({ ...state, one: false });
                setState({ ...state, two: true, one: false });

              }}
              className="mt-6  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
            >
              <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                Подтвердить
              </span>
              <img className="" src={formArrowRightCircle} alt="female" />
            </div>
            </div>

          </div>
        </Modal>
     {/* Two */}
        <Modal
          open={state?.two}
          closable={false}
          footer={null}
        >
          <div className="w-full h-[230px] p-4 ">
            <div className="w-full flex justify-between items-center"> 
               <span className="text-black text-[22px]">2</span>
               <img onClick={handleTwoClose} src={MenuClose} alt=""/>
            </div>
            <div>
            <div className="mt-1 w-full h-fit">
              <div className=" not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
                Номер телефона
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 bg-btnBgColor focus:bg-btnBgColor active:bg-btnBgColor placeholder:bg-btnBgColor placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                  type="text"
                  placeholder="Phone number"
                  required
                />
                <img src={formPhone} alt="" />
              </div>
            </div>
            <div
              onClick={() => {
                setState({ ...state, three: true,two: false  });

              }}
              className="mt-6  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
            >
              <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                Подтвердить
              </span>
              <img className="" src={formArrowRightCircle} alt="female" />
            </div>
            </div>

          </div>
        </Modal>
      </div>
    </div>
  );
}
