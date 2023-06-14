import ExpenceDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'
//function ExpenceItem({date,title,amount}) { // destrukturyzacja obiektu
const ExpenceItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenceDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenceItem;

//only one root element then jsx snippet - not allowed only one.
