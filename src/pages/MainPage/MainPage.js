import { Children, useRef, useState, useEffect } from "react";
import { MainEle, MainTodoDiv, AddBtnDiv } from "./styles/style";
import { IoMdClose } from "react-icons/io";
import { AddNewBtn } from "../../components/index";

const MainPage = () => {

    const data = [

        {
            id:'1',
            name: 'learning reactjs',
            status:'todo',
            icon: <IoMdClose style={{ paddingLeft: '130px', cursor: 'pointer' }} />
        },
        {
            id:'2',
            name: 'learning HTMl',
            status:'todo',
            icon: <IoMdClose style={{ paddingLeft: '130px', cursor: 'pointer' }} />
        },
        {        
            id:'3',
            name: 'learning javaScript',
            status:'todo',
            icon: <IoMdClose style={{ paddingLeft: '130px', cursor: 'pointer' }} />
        },

    ]

    // const dragItem = useRef();
    // const dragOverItem = useRef();
    const [todoEle, setTodoEle] = useState(data);
    // const [wipEle, setWipEle] = useState([]);
    const [draggTask,setDraggTask] = useState(null)

    // const onDragStart = (e, position) => {
    //     dragItem.current = position;
    //     console.log(e.target.innerHTML);
    // }

    const onDragStart = (e,id) => {
        e.dataTransfer.effectAllowed = 'move';
        setDraggTask(id);    
    }

    // const onDragEnter = (e) => {
    //     // dragOverItem.current = position;
    //     // console.log(e.target.innerHTML)
    //     e.preventDefault();
    // }

    const onDragEnter = (e) => {
        e.preventDefault();
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const drop = (e,status) => {
        e.preventDefault();
        const droppedTaskId = draggTask;
        const updatedState = todoEle.map((ele) => {
            if(ele.id === droppedTaskId){
                return{...ele,status:status}
            }
            return ele;
        });
        setTodoEle(updatedState);
        setDraggTask(null);
        // const copyListItems = [...todoEle];
        // console.log(copyListItems, 'copylist');
        // const dragItemContent = copyListItems[dragItem.current];
        // copyListItems.splice(dragItem.current, 1);
        // console.log('>>>>>>>>>>>>.', copyListItems);
        // copyListItems.splice(dragOverItem.current, 0);
        // dragItem.current = null;
        // dragOverItem.current = null;
        // setTodoEle(copyListItems.splice(dragItemContent,1));
        // setWipEle((prevItems) => [...prevItems, dragItemContent]);
        // setWipEle(dragItemContent);
        // const drag = todoEle.find((item) => item.name === dragItemContent.name);
        // if (drag) {
        //     // Add the dropped item to the droppedItems array
        //     copyListItems.splice(drag.current, 1);
        //     copyListItems.splice(dragOverItem.current, 0);
        //     // drag.current = null;
        //     // dragOverItem.current = null;
        //     setWipEle((prevItems) => [...prevItems, drag]);

        // }
    };

    const onClose = (index) => {
        document.getElementById(`id-${index}`).remove();

    };
    //const [state, setState] = useState('');
    const updatedData = (data) => setTodoEle([...todoEle, {
        name: data,
        status:"todo",
        icon: <IoMdClose style={{ paddingLeft: '130px', cursor: 'pointer' }} />
    }]);

    // useEffect(() => {

    // }, [todoEle, setState1])


    return (
        <>
            <AddNewBtn stateChanger={updatedData} />
            <MainEle>
                <div className="div-css"
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDrop={(e) => drop(e, 'todo')}>
                    <h2 className="h2">TO DO</h2>
                    <MainTodoDiv>
                        {

                            todoEle.map((item,index) => {
                                console.log(item, 'items of todo');
                                if(item.status === "todo"){
                                return (
                                    <div
                                        key={item.id}
                                        id={`id-${index}`}
                                        className="todo-tickets"
                                        onDragStart={(e) => onDragStart(e,item.id)}
                                        // onDragEnter={(e) => onDragEnter()}
                                        draggable>
                                        <div className="icons-div" onClick={() => onClose(index)}>{item.icon}</div>
                                        <div className="item-name">{item.name}</div>

                                    </div>
                                )
                                }
                                return null;
                            })
                        
                        }
                    </MainTodoDiv>
                </div>
                <div className="div-css"
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDrop={(e) => drop(e, 'inProgress')}>
                    <h2 className="h2">In Progress</h2>
                    <MainTodoDiv>
                        {
                            todoEle.map((item, index) => {
                                if(item.status === "inProgress"){
                                return (
                                    <div
                                        key={item.id}
                                        id={`id-${index}`}
                                        className="todo-tickets"
                                        onDragStart={(e) => onDragStart(e,item.id)}
                                        draggable
                                    >
                                        <div className="icons-div" onClick={() => onClose(index)}>{item.icon}</div>
                                        <div className="item-name">{item.name}</div>

                                    </div>
                                )}
                                return null;
                            })
                        }

                    </MainTodoDiv>
                </div>
                <div className="div-css"
                  onDragEnter={onDragEnter}
                  onDragOver={onDragOver}
                  onDrop={(e) => drop(e, 'completed')}>
                    <h2 className="h2">Completed</h2>
                    <MainTodoDiv>
                        {
                            todoEle.map((item,index) => {
                                if(item.status === 'completed'){
                                    return(
                                        <div
                                        key={item.id}
                                        id={`id-${index}`}
                                        className="todo-tickets"
                                        draggable
                                        onDragStart={(e) => onDragStart(e,item.id)}
                                    >
                                        <div className="icons-div" onClick={() => onClose(index)}>{item.icon}</div>
                                        <div className="item-name">{item.name}</div>
                                    </div>
                                    )
                                }
                                return null;
                            })
                        }
                     
                    </MainTodoDiv>
                </div>
            </MainEle>
        </>
    )
}

export default MainPage;