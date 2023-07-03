import React from 'react'

export default function HeaderSection() {
    return (
        <>
            <div className="bg-success "  >
                <div className="flex" style={{ width: '100vh', height: '100vh' }} justify-content align-items-center>
                    <div><img className='img-fluid' src='https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg'></img></div>

                    <div className="container">
                        <h1 className="text-white">
                            Lorem ipsum dolor sit.
                        </h1>
                        <p className="text-secondary text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ratione ut, quis repellat, vitae voluptas illo pariatur vero accusamus nisi nam expedita repellendus consequuntur! Quod eius mollitia dicta eveniet nemo.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
