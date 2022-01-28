import SquareRow from "../../components/SquareRow";

export default function tabuleiro() {
    return (
        <div className="table">
            <SquareRow columns={8}/>
        </div>
    )
}