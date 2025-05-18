import * as _ from "./style";
import title from '../../assets/home/HomeTitle.png';

const Home = () => {
    return(
        <_.Container>
            <_.TitleBox>
                <img src={title} style={_.titleStyle}/>
            </_.TitleBox>
            <_.Card>
                This is home    
            </_.Card>
        </_.Container>
    );
}

export default Home;