const DivSizing = () => {
    return(
        <>
            <div className="space-x-2 flex w-full flex-wrap">
            <div className="w-2/5 min-w-2/5 h-[100px] bg-red-500"> </div>
            <div className="w-3/5 min-w-3/5 h-[100px] bg-red-500"> </div>
            <div className="w-3/5 h-[100px] bg-red-500"> </div>
            <div className="w-3/5 h-[100px] bg-red-500"> </div>
            {/*<div className="w-1/2 h-[100px] bg-red-500"> </div>*/}
            </div>
        </>
    )
}

export default DivSizing;