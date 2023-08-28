import "./Category.scss"
import jordan from '@img/product/jordan/jordan1.webp'
import running from '@img/product/running/running1.webp'
import basketball from '@img/product/basketball/basketball1.webp'
import football from '@img/product/football/football1.webp'
import lifestyle from '@img/product/lifestyle/lifestyle1.webp'
import { useNavigate } from 'react-router'

export default function Category() {
    const navigate = useNavigate()
    
    return (
        <section className="category" id="category">

            <a className="box" onClick={() => navigate("/men/jordan")}>
                <img src={jordan} alt="" />
                <h3>Jordan</h3>
            </a>

            <a className="box" onClick={() => navigate("/men/running")}>
                <img src={running} alt="" />
                <h3>Running</h3>
            </a>

            <a className="box" onClick={() => navigate("/men/basketball")}>
                <img src={basketball} alt="" />
                <h3>BasketBall</h3>
            </a>

            <a className="box" onClick={() => navigate("/men/football")}>
                <img src={football} alt="" />
                <h3>Football</h3>
            </a>

            <a className="box" onClick={() => navigate("/men/lifestyle")}>
                <img src={lifestyle} alt="" />
                <h3>Lifestyle</h3>
            </a>

        </section>
    )
}
