import React from 'react'
import CategoryvSection from '../components/CategoriesSection'
import Sidepage from '../components/Sidepage,jsx'
function CategoryvPage() {



    return (
        <>

            <div className="row " style={{ display: 'flex' }}>
                <div style={{ width: '20vw' }} className="col-md-3 ">
                    <Sidepage />
                </div>
                <div className="col-md-9 ">
                    <CategoryvSection />
                </div>
            </div>




        </>

    )
}

export default CategoryvPage