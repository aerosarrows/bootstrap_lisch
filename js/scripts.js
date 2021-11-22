$(function (){
    $('#loginButton').on('click',function(){
        $('#loginModal').modal('show');
    });

    $('#beanOneButton').on('click',function(){
        $('#beanOneModal').modal('show');
    });

    $('#beanTwoButton').on('click',function(){
        $('#beanTwoModal').modal('show');
    });

    $('#beanThreeButton').on('click',function(){
        $('#beanThreeModal').modal('show');
    });

    $('[data-toggle="tooltip"]').tooltip();
});
