import './filterbutton.css';

function FilterButton (props) {
    // function onClickBtn(event) {
    //     console.log(event.target.innerHTML)
    // }

    function filterBtn(event){
            props.onChange(event.target.innerHTML);
    }

    return (
        <button onClick={filterBtn} className={props.activeBtn === props.children ? 'active' : null}>
            {props.children}
        </button>
    )
}

export default FilterButton;