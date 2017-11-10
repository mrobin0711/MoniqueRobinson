$(document).ready(function() {



	//Add Item to the TODO List
	$('#addTodoList').submit(addToDoListItem);
	//clear List when clicking the clearlist button
	$('#clearList').click(emptyToDoList);
	//clear completeed item from the List when clicking the clearlist button
	$('#clearCompletedList').click(removeCompletedToDoListItems);

	//Remove Item from the TODO List; WRITTEN LIKE THIS BELOW BECAUSE THE CLASSES WEREN'T THERE WHEN THE PAGE LOADED
	$('#todos').on('click', '.remove', removeToDoListItem);

	//Edit Item in the TODO List
	$('#todos').on('click', '.edit', editToDoListItem);

	//Save Edited Item in the TODO List; BLUR IS WHEN YOU CLICK OUT OF FOCUS OR OUT OF THE INPUT FIELD
	$('#todos').on('blur', '.editor', saveEditedToDoListItem);

	//Strikethrough when done
	$('#todos').on('click', 'li', markToDoListItemAsCompleted);

	//Clear input field when clicking the add to list button
	$('#addTodoItem').on('click', 'input', clearInputField)


		//API Functions
		function addToDoListItem() {
		//Get the value of the input field
		var item = $('#addTodoItem').val();

		//Append the item to the unordered list; BECAUSE YOU WERE ADDING TO; NOT REMOVING ANYTHING
		$('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

		updateNumberOfToDoListItems();
		}

        //Remove ToDo list item when clicking remove
		function removeToDoListItem() {
			$(this).parents('li').remove();
		}

		//Add a form to edit the ToDo list item when clicking edit
		function editToDoListItem() {
			var editClicked = $(this).parents('li');
			var itemContent = $(this).siblings('.item').text();

			$(editClicked).html('<form class="editor" action=""><input type="text" value="'+itemContent+'"></form>');
		}

		//Save the edited text
		function saveEditedToDoListItem() {
			var newItem = $(this).find('input').val();
			var listItem = $(this).parents('li');
			$(listItem).html('<li><span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
		}

		//Strikethrough when complete
		function markToDoListItemAsCompleted(){
			$(this).toggleClass('done');
			updateNumberOfToDoListItems();
		}
		//Clear everything from the ToDo List when clicking the clear list button
		function emptyToDoList() {
			$('#todos').empty();
		}
		//Clear the completed items from the ToDo List when clicking the clear completed list button
		function removeCompletedToDoListItems() {
			$('.done').remove(); 
		}

		//Update the number to do items when items are added/removed from the list
		function updateNumberOfToDoListItems() {
			var count = $('#todos li').not('.done').length;
				$('#count').html(count);
		}
		//Clear the input field after clicking add to list
		function clearInputField() {
			console.log('gone');
		}

});