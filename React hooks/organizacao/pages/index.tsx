import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTableOrForm from '../hook/useTableOrForm'

export default function Home() {
    const {visibleTable, alternar} = useTableOrForm()

    return (
        <div className={styles.container}>
            {visibleTable ? (
                <div>
                <table style={{border: '1px solid #fff'}}>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th> 
                        <th>Idade</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Ana</th>
                        <th>13</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Gustavo</th>
                        <th>15</th>
                    </tr>
                </table>
            </div>
            ) : (
                <div>
                    <div>
                        <span>Nome</span><input type="text" />
                    </div>
                    <div>
                        <span>Idade</span><input type="text" />
                    </div>
                </div>
            )}
            
        <button onClick={alternar}>Mudar estado</button>
        </div>
    )
}
