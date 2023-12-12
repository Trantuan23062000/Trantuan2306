import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
       <header className="header">
      <div className="container">
        
        <img src="IMG_0360.JPG" alt=''></img>
        <h1>Trần Thanh Tuấn</h1>
        <p>Fullstack developer</p>  
        <h3>
          Thông tin liên hệ:

          <h4>
            Địa chỉ : Số nhà 184, ấp Hoà Thành, xã Định Thành, huyện Thoại Sơn, tĩnh An Giang
            
          </h4>
          <h4>
            Số điện thoại : 0795435792
          </h4>
          <h4>
            Email : trantuan135798@gmail.com
          </h4>
          
        </h3>
      </div>
    </header>

    </div>
   
  );
};

export default Header;
