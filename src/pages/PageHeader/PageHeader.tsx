import React , {FC} from "react"
import Button from "../../components/Button"
import classNames  from "classnames";
import './PageHeader.css'

type Header = {
    onClick: (tabName: string) => void 
    activeTab: string;
}
const PageHeader: FC <Header> = ({onClick, activeTab})  => {
    const isLoginActive = activeTab === 'login';
    return(
        <div> 
    <div className="wrapperHeader">
    <Button className={classNames('btnHeader', {['activeLink']: isLoginActive})}  onClick = {() => onClick('login')} btnText='Login' />
    <p className="dash"></p>
    <Button className={classNames('btnHeader', {['activeLink']: !isLoginActive})} onClick = {() => onClick('registration')} btnText='Registration'/>
</div></div>
    )}
    export default PageHeader