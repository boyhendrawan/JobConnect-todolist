const Card=props=>{
    const classCustom=`bg-[#fffffe] rounded-md ${props.className}`;
    return(
        <div onClick={props.onClickCard} className={classCustom}>
            {props.children}
        </div>
    )
}

export default Card;