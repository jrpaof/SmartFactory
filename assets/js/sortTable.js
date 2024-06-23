$(document).ready( function () {
   //  $('table.display').DataTable(
   // // {"lengthMenu": [[10], [10]]}
   //      // {"scrollX":true}
   //  );
    
    $('table.tableScrollX').DataTable(
   // {"lengthMenu": [[10], [10]]}
        {"scrollX":true}
    );
 
    $('.table-select tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });
} );
