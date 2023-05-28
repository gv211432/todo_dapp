import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import OvalBag from "../../../assets/Oval_bag.png";
import PlusIcon from "../../../assets/plus.png";
import { motion } from 'framer-motion';

const MIN_TEXTAREA_HEIGHT = 32;
const MAX_TEXT_HEIGHT = 120;
const ALLOWED_CONTENT_LEN = 150;
export default function AddTodo({ list }) {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  const headingContetnRef = useRef(""); // to store previous state of heading
  const bodyContetnRef = useRef(""); // to store the previous state of body

  const isSelected = useMemo(() => {
    if (extra?.right_data && extra?.right_data?.type === "add_todo") {
      if (extra?.right_data?.data?.list?.list_name?.trim() == list?.list_name?.trim()) return true;
    }
    return false;
  }, [extra]);

  const textareaRefHeading = React.useRef(null);
  const [heading, setHeading] = React.useState("");
  const onHeadingChange = (event) => {
    if (event.target?.value?.length > ALLOWED_CONTENT_LEN) return;
    setHeading(event.target.value);
  };
  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    if (headingContetnRef?.current?.length > heading?.length) {
      textareaRefHeading.current.style.height = "inherit";
      setState(p => ({ overflowBody: false }));
    }
    if (parseInt(textareaRefHeading.current?.style.height) > MAX_TEXT_HEIGHT) {
      setState(p => ({ overflowHead: true }));
      return;
    }
    textareaRefHeading.current.style.height = "inherit";
    textareaRefHeading.current.style.height = `${Math.max(
      textareaRefHeading.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
    headingContetnRef.current = heading;
  }, [heading]);

  // resizing the body input field height 
  const textareaRefBody = React.useRef(null);
  const [body, setBody] = React.useState("");
  const onBodyChange = (event) => {
    if (event?.target?.value?.length > ALLOWED_CONTENT_LEN) return;
    setBody(event.target.value);
  };
  useLayoutEffect(() => {
    if (body?.length < bodyContetnRef.current?.length) {
      textareaRefBody.current.style.height = "inherit";
      setState(p => ({ overflowBody: false }));
    }
    if (parseInt(textareaRefBody.current?.style.height) > MAX_TEXT_HEIGHT) {
      setState(p => ({ overflowBody: true }));
      return;
    }
    textareaRefBody.current.style.height = "inherit";
    textareaRefBody.current.style.height = `${Math.max(
      textareaRefBody.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
    bodyContetnRef.current = body;
  }, [body]);

  // console.log({ isSelected, name: list?.list_name, is: extra?.right_data?.data?.list?.list_name });

  return (
    <motion.div
      animate={{
        scale: [0.7, 1]
      }}
      className={`row m-1 ${isSelected ? "show-todos" : ""}`}
      style={{ maxWidth: "20rem", minWidth: "10rem" }}
    >
      <div className="card-body"
        style={{
          "background": darkMode ? "#191B20" : "#ddd",
          "opacity": "0.8", "borderRadius": "16px",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", right: "0.3rem", top: "0.4rem" }} >
          <img src={PlusIcon} alt="oval_bag"
            className='me-2 p-2 basic-icons rounded rounded-circle' height={30}
            style={{
              backgroundColor: "#30343d"
            }}
            onClick={() => {
              dispatch(setExtra({ key: "hideRightDrawer", val: false }));
              dispatch(setExtra({
                key: "right_data",
                val: {
                  type: "add_todo",
                  data: {
                    list,
                    description: body,
                    title: heading,
                  }
                }
              }));
              setBody("");
              setHeading("");
            }}
          />
        </div>
        <div className='row'>
          <div className='col-2'>
            <img src={OvalBag} alt="oval_bag" className='me-2' height={30} />
          </div>
          <textarea className="card-title text-start col-8 ms-1"
            onChange={onHeadingChange}
            ref={textareaRefHeading}
            value={heading}
            rows={1}
            placeholder='Add Todo'
            style={
              {
                resize: "none",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                // lineHeight: "24px",
                overflow: "hidden",
                overflowY: (state?.overflowHead) ? "scroll" : "hidden",
                // width: "6rem",
                color: darkMode ? "#6E6E6E" : "#858585e1",
                // marginTop: "",
                outline: "none",
                border: "0px",
                "background": darkMode ? "#191B20" : "#ddd",
              }
            } />
        </div>
        <textarea
          onChange={onBodyChange}
          ref={textareaRefBody}
          rows={1}
          value={body}
          className="card-subtitle"
          placeholder='Add todo description'
          style={{
            resize: "none",
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            // lineHeight: '26px',
            color: '#808191',
            overflow: "hidden",
            overflowY: (state?.overflowBody) ? "scroll" : "hidden",
            // width: "6rem",
            // color: darkMode ? "#6E6E6E" : "#858585e1",
            marginTop: "",
            outline: "none",
            border: "0px",
            "background": darkMode ? "#191B20" : "#ddd",
          }} />
      </div>
    </motion.div>
  );
}
