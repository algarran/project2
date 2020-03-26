
$.get('/api/all', function(data) {
    for (var i = 0; i < data.length; i++) {
        var customer = $('<div>');
        customer.addClass('exist');
        customer.attr('id', 'customer-exist-' + i);
        $('#customer-section').append(customer);


        //all the customer info returned
        

    }
});