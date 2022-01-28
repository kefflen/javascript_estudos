import style from "../styles/tableSquares.module.css"

function generateSquares(qtd) {
    let result = []

    for (let rowIndex=0; rowIndex<qtd; rowIndex++) {
        let row = []
        for (let columnsIndex=0; columnsIndex<qtd; columnsIndex++) {
            row.push(
                (columnsIndex+rowIndex)%2==0? <div key={columnsIndex} className={style.whiteSquare}></div> :
                 <div key={columnsIndex} className={style.blackSquare}></div>)
        }
        result.push(<div className={style.rowSquare}>{row}</div>)
    }
    return result
}

export default function SquareRow(props) {
    return <div className={style.table}>{generateSquares(props.columns)}</div>
}