import Card from './Card'
import './Cards.css'
const Cards = () => {
    return (
        <div className='cards'>


            <Card name="Seared Tilapia" image="https://images.unsplash.com/photo-1558017488-86d3e090a9ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" price="2.90"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatum deleniti magni nulla..
" />


            <Card name="Grilled Cod"
                image="https://images.unsplash.com/photo-1604909052868-dd2ef1e53daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" price="60.00"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatum deleniti magni nulla.
" />

            <Card name="Easy Tuna Patties" image="https://images.unsplash.com/photo-1521305916504-4a1121188589?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" price="3.60"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatum deleniti magni nulla.
" />

            <Card name="Salmon Cakes" image="https://images.unsplash.com/photo-1593974850481-ea9cf3a34249?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" price="5.75" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatum deleniti magni nulla.
" />


            <Card name="Ahi Tuna Steaks" image="https://images.unsplash.com/photo-1604909052743-94e838986d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" price="6.40" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatum deleniti magni nulla.
" />

        </div>
    )
}

export default Cards
