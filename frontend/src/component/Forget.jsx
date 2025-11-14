import React from 'react';

function Forget(props) {
    

    return (
        <>
            <div className="forget">
                <div className="main-forget">
                    <div className="forget-welcome">
                        <img src="https://st2.depositphotos.com/5780108/12025/v/450/depositphotos_120257578-stock-illustration-thinkin-man-illustration.jpg" alt="" width="330px" height="500px" />
                    </div>
                    <div className="forget-form">
                        <h1>Reset Password</h1><br />
            
                        <label>New Password</label><br />
                        <input type="password" placeholder='enter your new password' /><br /><br />
                        <label>Confrom New Password</label><br />
                        <input type="password" placeholder='enter your conform New password' /><br /><br />

                        <button type='submit' className='btn' >continue</button>
                        <button type='submit' className='btn' >Cancel</button>

                    </div>
                </div>

            </div>
        </>
    );
}
export default Forget;