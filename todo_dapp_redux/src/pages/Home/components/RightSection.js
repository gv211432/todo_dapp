import React, { useEffect, useState } from 'react';
import CloseArrow from "../../../assets/close_arrow.png";
import EditList from '../components/EditList';
import EditTodo from '../components/EditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setEther, setExtra } from '../../../features/state/gobalState';
import EditAddList from './EditAddList';
import EditAddTodo from './EditAddTodo';
import connetWallet from '../../../helpers/conectWallet';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteButtonRight from './DeleteButton';
import TransactionSpinner from './TransactionSpinner';

export default function RightSection() {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const right_data = useSelector(selectExtra)?.right_data;
  const [state, setState] = useState(null);

  useEffect(() => {
    if (right_data?.type === "todo") {
      setState({
        ...right_data?.data,
        type: right_data?.type,
        title: right_data?.data?.title,
        body: right_data?.data?.description,
        completed: false,
      });
    } else if (right_data?.type === "list_title") {
      setState({
        ...right_data?.data,
        type: right_data?.type,
        title: right_data?.data?.list_name,
        completed: false,
      });
    } else if (right_data?.type === "add_list") {
      setState(p => ({
        ...right_data?.data,
        type: right_data?.type,
        title: "",
        body: "",
        completed: false,
      }));
    } else if (right_data?.type === "add_todo") {
      setState(p => ({
        ...right_data?.data,
        type: right_data?.type,
        title: "",
        body: "",
        completed: false,
      }));
    }
  }, [right_data]);

  console.log({ right_data, state });

  const missingFieldsAlert = () => {
    dispatch(setExtra({
      key: "alert", val: {
        element:
          <motion.div
            animate={{ scale: [0.7, 1] }}
            className="alert f-alert alert-warning text-center"
            role="alert">
            {"Some fields are missing!!"}
          </motion.div>,
        time: 3000
      }
    }));
  };

  // conditional handling for the todos
  const handleSubmit = async (e) => {
    if (right_data?.type === "todo") {
      // this block updates the todo lists
      if (state?.completed) {
        if (state?.listName && state?.index) {
          try {
            dispatch(setExtra({ key: "waiting", val: true }));
            const res = await (await connetWallet())?.contract?.deleteTodo(
              state.index,
              state?.listName
            );
            dispatch(setExtra({ key: "right_data", val: null }));
            await res.wait();
            console.log(await res);
            dispatch(setEther());
            setState(p => ({
              ...right_data?.data,
              title: "",
              body: ""
            }));
            dispatch(setExtra({ key: "waiting", val: false }));
            dispatch(setExtra({
              key: "alert", val: {
                element:
                  <motion.div
                    animate={{ scale: [0.7, 1] }}
                    className="alert f-alert alert-success"
                    role="alert">
                    Todo deleted Successfully...
                  </motion.div>,
                time: 3000
              }
            }));
          } catch (error) {
            console.log("Rightsection:", error);
            dispatch(setExtra({ key: "waiting", val: false }));
          }
        } else { missingFieldsAlert(); }
      } else {
        // this block updates the selected todo
        if (state?.listName && state?.title && state?.body && state?.index) {
          try {
            dispatch(setExtra({ key: "waiting", val: true }));
            const res = await (await connetWallet())?.contract?.updateTodo(
              state.index,
              state.listName,
              state.title,
              state.body
            );
            dispatch(setExtra({ key: "right_data", val: null }));
            await res.wait();
            console.log(await res);
            dispatch(setEther());
            setState(p => ({
              ...right_data?.data,
              title: "",
              body: ""
            }));
            dispatch(setExtra({ key: "waiting", val: false }));
            dispatch(setExtra({
              key: "alert", val: {
                element:
                  <motion.div
                    animate={{ scale: [0.7, 1] }}
                    className="alert f-alert alert-success"
                    role="alert">
                    Todo Updated Successfully...
                  </motion.div>,
                time: 3000
              }
            }));
          } catch (error) {
            console.log("Rightsection:", error);
            dispatch(setExtra({ key: "waiting", val: false }));
          }
        }
      }
    } else if (right_data?.type === "list_title") {
      // this block deletes the lists
      if (state?.title && state?.completed) {
        try {
          dispatch(setExtra({ key: "waiting", val: true }));
          const res = await (await connetWallet())?.contract?.removeList(
            state?.list_name
          );
          dispatch(setExtra({ key: "right_data", val: null }));
          await res.wait();
          console.log(await res);
          dispatch(setEther());
          setState(p => ({
            ...right_data?.data,
            title: "",
            body: ""
          }));
          dispatch(setExtra({ key: "waiting", val: false }));
        } catch (error) {
          console.log("Rightsection:", error);
          dispatch(setExtra({ key: "waiting", val: false }));
          dispatch(setExtra({
            key: "alert", val: {
              element:
                <motion.div
                  animate={{ scale: [0.7, 1] }}
                  className="alert f-alert alert-success"
                  role="alert">
                  List deleted Successfully...
                </motion.div>,
              time: 3000
            }
          }));
        }
      } else { missingFieldsAlert(); }
    } else if (right_data?.type === "add_list") {
      // this block adds new lists
      if (state?.title) {
        try {
          dispatch(setExtra({ key: "waiting", val: true }));
          const res = await (await connetWallet())?.contract?.addList(
            state.title,
          );
          dispatch(setExtra({ key: "right_data", val: null }));
          await res.wait();
          console.log(await res);
          dispatch(setEther());
          setState(p => ({
            ...right_data?.data,
            title: "",
            body: ""
          }));
          dispatch(setExtra({ key: "waiting", val: false }));
        } catch (error) {
          console.log("Rightsection:", error);
          dispatch(setExtra({ key: "waiting", val: false }));
          dispatch(setExtra({
            key: "alert", val: {
              element:
                <motion.div
                  animate={{ scale: [0.7, 1] }}
                  className="alert f-alert alert-danger text-center"
                  role="alert">
                  {"List Name aleady exist!! or Process stoped!!"}
                </motion.div>,
              time: 3000
            }
          }));
        }
      } else { missingFieldsAlert(); }
    } else if (right_data?.type === "add_todo") {
      // this block add new todo in the blockchain
      if (state?.list?.list_name && state?.title && state?.body) {
        try {
          dispatch(setExtra({ key: "waiting", val: true }));
          const res = await (await connetWallet())?.contract?.addTodo(
            state.list.list_name,
            state.title,
            state.body
          );
          dispatch(setExtra({ key: "right_data", val: null }));
          await res.wait();
          console.log(await res);
          dispatch(setEther());
          setState(p => ({
            ...right_data?.data,
            title: "",
            body: ""
          }));
          dispatch(setExtra({ key: "waiting", val: false }));
          dispatch(setExtra({ key: "right_data", val: null }));
        } catch (error) {
          dispatch(setExtra({ key: "waiting", val: false }));
          console.log("Rightsection:", error);
        }
      } else { missingFieldsAlert(); }
    }
  };

  return (
    !right_data ? <div
      className='text-start p-4 f-txt'
      style={{
        // color: darkMode ? "#ddd" : ""
        position: "relative",
        height: "90vh"
      }}
    >
      Please select todos to show here!
      <div className='container text-center d-md-none'>
        <FontAwesomeIcon
          onClick={() => dispatch(setExtra({ key: "hideRightDrawer", val: false }))}
          style={{
            marginTop: "14rem",
            border: "1px solid grey"
          }}
          className='p-2 basic-icons rounded rounded-circle img-r'
          icon={"arrow-right"}
          height={50}
        />
      </div>
      {extra?.waiting && <TransactionSpinner />}
    </div>
      :
      <div className='container text-start pt-2'
        style={{
          position: "relative",
          marginLeft: "-0.5rem",
          height: "90vh"
        }}
      >
        <div
          style={{
            // border: "1px solid grey",
            maxWidth: "30rem"
          }}
        >
          <img
            src={CloseArrow}
            alt="close"
            className={`me-2 p-1 basic-icons ${!darkMode && "img-i"}`}
            height={20}
            style={{}}
            onClick={() => {
              dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }));
              dispatch(setExtra({ key: "right_data", val: null }));
            }}
          />
          <span className='txt'
            style={{
              color: !darkMode ? "#242731" : "#fff",
              verticalAlign: "middle"
            }}>
            {
              (right_data?.type === "todo")
                ? "Edit Todo"
                : (right_data?.type === "list_title")
                  ? "Delete The List"
                  : (right_data?.type === "add_list")
                    ? "Add New Todo List"
                    : (right_data?.type === "add_todo")
                      ? "Add Todo" : ""
            }
          </span>
          <br />
          <br />
          {/* edit title */}
          {
            (state?.type === "todo")
              ? <>
                {/* Show when any todo edit icon is clicked */}
                <EditList state={state} setState={setState} />
                <EditTodo state={state} setState={setState} />
                <DeleteButtonRight state={state} setState={setState} />
              </>
              : (state?.type === "list_title")
                ? <>
                  {/* show when list title is clicked */}
                  <EditList state={state} setState={setState} disabled={true} />
                  <DeleteButtonRight state={state} setState={setState} />
                </> : (state?.type === "add_list")
                  // show when add todo plus icon is clicked
                  ? <EditAddList state={state} setState={setState} />
                  : (state?.type === "add_todo")
                    ? <>
                      {/* <ShowList2 title={state?.list?.list_name} /> */}
                      <EditAddTodo state={state} setState={setState} />
                    </>
                    : null
          }
          <center style={{
            maxWidth: "30rem",
            minWidth: "10rem",
          }}>
            <button
              className={darkMode ? 'btn fade-text' : "btn fade-text-light"}
              style={{
                border: "1px solid #666",
                marginTop: "1rem",
              }}
              onClick={e => {
                handleSubmit(e);
              }}
            >{"Save"}
            </button>
          </center>
        </div>
        {extra?.waiting && <TransactionSpinner />}
      </div>
  );
}
