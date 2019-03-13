$( document ).ready(function() {
    $url = "https://api.myjson.com/bins/17ir7m";
    $hasil = 
            '<tr>' +
                '<th>ID</th>' +
                '<th>Nama</th>' +
                '<th>Gender</th>' +
            '</tr>';

    $.get($url,function(data){
        $.each(data,function(key,items){
            $hasil += 
                    '<tr>' +
                        '<td>'+ items.id +'</td>' +
                        '<td>'+ items.nama +'</td>' +
                        '<td>'+ items.gender +'</td>' +
                    '</tr>';
        })
        $('#data').html($hasil);
    })

});