import React from 'react'
import Card from '../components/UI/Card';
import ContainerForm from "../components/Search/ContainerForm";
import ListData from "../components/ListUser/ContainerData";
import { useDispatch } from 'react-redux';
import { getUserTodo } from '../utilites/redux/Action/todolist';
import AnimationLoading from '../components/UI/AnimationLoading';
import { useSelector } from 'react-redux';
const Home = () => {
  const  dispatch=useDispatch();
  const [isLoading,setIsLoading]=React.useState(false);
  const [currentSearch,setSearch]=React.useState("");
  const {dataUser}=useSelector(features=>features.Auth);
  const {datas}=useSelector(features=>features.todolist)
  // getData
  React.useEffect(()=>{
    if(dataUser){
      setIsLoading(true)
      dispatch(getUserTodo(setIsLoading,dataUser))
    }
   
  },[dispatch,dataUser])
  const handlerChildCon =e =>{
    //getDatafrom children
    setSearch(e);
  }
  
  return (
    <>
    {isLoading && !datas &&<AnimationLoading/> }
    {!isLoading && datas && 
    <Card className="container mx-auto max-w-xl font-mainFont  md:my-4 shadow-inner w-[100%] ">
    <div className="w-full md:rounded-md shadow-sm shadow-black flex flex-col px-6 py-4">
      <ContainerForm onSearchApp={handlerChildCon} />
      <ListData   allDatas={datas} searchVal={currentSearch}/>
    </div>
  </Card>
  }
  </>
  )
}

export default Home