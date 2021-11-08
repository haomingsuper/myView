import React, { useEffect } from 'react';

// console.log(require())

const Hobby = (props) => {
    function drawPicture(url) {
        if (!url) return
        let result_arr = []; // 结果列表
        // 获取canvas画板
        let canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d'), // 笔2d
            img = new Image(); // 创建一个新的img标签
        img.src = url; // 链接地址
        img.onload = function(){ //
            console.log(img)
            ctx.drawImage(img,0,0,328,112);
            let cw = canvas.width , ch = canvas.height;
            let imgData = ctx.getImageData(0,0,cw,ch).data;
            i = 0
            let len = imgData.length , j = 0;
            let tmpx = 0;
            for( ; i < len ; i++ ){
                tmpx+=1;
                if(i % 1200 == 0 && i!= 0){
                    j+=1;
                    tmpx = 0;
                };
                var rgbas = `rgba(${imgData[i]},${imgData[i+1]},${imgData[i+2]},${imgData[i+3]})`;
                result_arr.push( { x : tmpx , y : j , rgbas : rgbas } );
                i+=3;
            };
            ctx.clearRect(0,0,cw,ch);
            result_arr = result_arr.filter(item=>{ return item.rgbas != 'rgba(0,0,0,0)' });
            console.log(result_arr)
            var i = 0 ;
            function draw(){
                for( var i = 0 ;i < result_arr.length; i++ ){
                    ctx.fillStyle = result_arr[i].rgbas;
                    ctx.fillRect( result_arr[i].x , result_arr[i].y ,1,1);
                };
            }
            draw();
        };
    }
    useEffect(() => {
        drawPicture('/hahaha.png')
    }, [])
  return (
    <>
      <canvas id={"canvas"} style={{width: '500px', height: '500px'}}/>
    </>
  );
};

export default Hobby;
