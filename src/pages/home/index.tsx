import * as _ from "./style";
import title from '../../assets/home/HomeTitle.png';
import blocks from '../../assets/blocks/Blocks.png';

const Home = () => {
    return(
        <_.Container>
            <_.TitleBox>
                <img src={title} style={_.titleStyle} />
            </_.TitleBox>
            <_.Card>
                <_.CardInner>
                    <_.SectionFirst>
                        
                        <_.SectionFirstDiv1>
                            <_.TextBox>
                                <_.TextBoxP>About</_.TextBoxP>
                                <_.TextBoxH2>LAYERED is ...</_.TextBoxH2>
                            </_.TextBox>
                            <_.BlockImg src={blocks}/>
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