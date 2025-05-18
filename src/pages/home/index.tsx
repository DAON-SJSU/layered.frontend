import * as _ from "./style";
import title from '../../assets/home/HomeTitle.png';

const Home = () => {
    return(
        <_.Container>
            <_.TitleBox>
                <img src={title} style={_.titleStyle}/>
            </_.TitleBox>
            <_.Card>
                <_.CardInner>
                    <_.SectionFirst>
                        <_.SectionFirstDiv1>
                            <_.TextBox>
                                <_.TextBoxP>About</_.TextBoxP>
                                <_.TextBoxH2>LAYERED is ...</_.TextBoxH2>
                            </_.TextBox>
                        </_.SectionFirstDiv1>
                        <_.SectionFirstDiv2>

                        </_.SectionFirstDiv2>
                    </_.SectionFirst>
                </_.CardInner>
            </_.Card>
        </_.Container>
    );
}

export default Home;