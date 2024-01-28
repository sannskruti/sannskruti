import React from 'react'
import './skills.css';
import UIDesign from '../../assets/UIDesign.jpg';
import AppDesign from '../../assets/AppDeve.jpg';
import WebDesign from '../../assets/webdesign.jpg';

export const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>what I do</span>
        <span className='skillDesc'>Iam a skilled and passionate web designer with experince sbh kjsfsd jsd fnsdfbsdjf sdjsdkfjsdnfjsd sdjnfsj fsd ghsbuhd dfjnifndu dfhbdf sdhs dfs dm vudfj uidfgbdfgd asdah sas fhas f ashbfasf ahs asdhbasodnaofubef vbh calibdabefh fhasbyfbev iusdufyue sd vyubvhfbvuihuieabrg rvyibhfwliuefajfuahfjsd fsnd fkjsadfs in creating visiually</span>
        <div className='skillBars'>
            <div className='skillBar'> 
                <img src={UIDesign} alt='UIdesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web</h2>
                        <p>This is demo text bduid dufbad asuas kjsbfnsdfbsf sdfba fsda fjsad fhbhjbfafbda fadsbsahdfyewfusbfs dfiusbfihsbadfjasdiufsd fisdbfsdbfsdbfasdfsdj dasbdaiusbda sdausbdas</p>
                    </div>
            </div>
            <div className='skillBar'> 
                <img src={WebDesign} alt='webdesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI design</h2>
                        <p>This is demo text sndoad asuasfa sfasfas jdbfsdfiuasb fsbfsahd fagsbfuibdv vdjfvuifdbv fvd hjdsfy vsdbyabsyu rav cbv zxnv nc vahv nc vga uawbfuid v kbaiybhdfyibfhsdaibfsdf sad fajsfa sfjasfa sfas</p>
                    </div>
            </div>
            <div className='skillBar'> 
                <img src={AppDesign} alt='appdesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App design</h2>
                        <p>This is demo text dasndjansdnas  djfkn FIUf dUBFnf iUJN JXN UNKJ jhbfksdoisd fsjdnfjsdfsjdfnsd fhdsfjsduofsfdjndoifg dfjgdffdasdas dhasba shfabsf ashfas fa</p>
                    </div>
            </div>
       </div>
    </section>
  )
}
export default Skills;
