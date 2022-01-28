import { useRouter } from "next/router"
export default function userId() {
    const router = useRouter()
    const categoria = router.query.categoria
    const userId = router.query.userId
    return (
        <div>
            <h1>Categoria: {categoria}</h1>
            <h2>ID: {userId}</h2>
        </div>
    )
}