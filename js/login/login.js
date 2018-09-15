layui.use(['layer', 'form', 'jquery'], function() {
    let $ = layui.jquery,
        layer = layui.layer,
        form = layui.form;
    
    form.on('submit(login)', function () {
        let index = layer.load();
        $.ajax({
            type: 'get',   //用get方式传输
            url: 'http://localhost:8080/login',  //目标地址
            data: {  //传参数
                'loginId': $('#loginId').val(),
                'password': $('#password').val()
            },
            dataType: 'json',  //数据格式:JSON
            async: false,
            success: function (result) {
                console.log(result);
                if (result.code === 200) {
                    setTimeout(function() {
                        layer.close(index);
                        layer.msg('登录成功', {
                            time: 800,
                            icon: 1
                        }, function () {
                            window.location.href = 'html/index.html';
                        });
                    }, 800);
                }else {
                    alert("登录失败");
                }
            }
        });
        return false;
    });
});
