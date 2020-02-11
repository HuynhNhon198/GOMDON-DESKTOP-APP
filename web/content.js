console.log('content');

const read_data_from_port = () => {
    eel.read_data_serial()(data=>{
        $('.scan ul.results').prepend(`<li class="list-group-item">${data}</li>`)
        read_data_from_port()
    })
}

const open_port = (port) => {
    $('#loading').show()  
    eel.open_port(port)(data=>{
        $('span.open-p').text(data);
        read_data_from_port();
        $('#loading').hide();
    })
}

const getPort = () => {
    eel.get_ports()(data => {
        console.log(data);
        $('.port').html('')
        if(data.length>0){
            data.forEach(port => {
                $('.ports').append(`<option>${port}</option>`)
            });
            open_port($('.ports').val());    
            $('.ports').change(function (e) {
                open_port($(this).val())
            })
        }
        
    })
}

getPort()

$('ul.float-left li').click(function (e) {
    $('ul.float-left li').attr('class', 'nav-item');
    $(this).addClass('active')
})

