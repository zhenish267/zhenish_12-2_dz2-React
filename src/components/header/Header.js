import classes from "./Header.module.css"

export const Header = () => {
    return (
        <ul className="header">
            <div className={classes.link_block}>
                <li className={classes.link}>Home</li>
            </div>
            <div className={classes.link_block}>
                <li className={classes.link}>About</li>
            </div>
            <div className={classes.link_block}>
                <li className={classes.link}>Contacts</li>
            </div>
        </ul>
    )
}