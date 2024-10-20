import { Star } from "./Star"

export const Stars = ({ count }: { count: number }) => {
    if (count < 1 || count > 5 || typeof count !== 'number') {
        return null
    }
    return (
        <ul className="card-body-stars u-clearfix">
            {new Array(count).fill(null).map((_, i) => <li key={i}><Star /></li>)}
        </ul>
    )
}

