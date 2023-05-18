// Get unique values for the desired columns
function getUniqueValuesFromColumn() {
    var unique_col_values_dict = {};

    var allFilters = document.querySelectorAll(".table-filter");
    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute("col-index");
        var rows = document.querySelectorAll("#emp-table > tbody > tr");

        rows.forEach((row) => {
            var cell_value = row.querySelector("td:nth-child(" + col_index + ")").innerHTML;
            if (col_index in unique_col_values_dict) {
                if (unique_col_values_dict[col_index].includes(cell_value)) {
                    // Value already present in the array
                } else {
                    unique_col_values_dict[col_index].push(cell_value);
                }
            } else {
                unique_col_values_dict[col_index] = [cell_value];
            }
        });
    });

    updateSelectOptions(unique_col_values_dict);
}

// Add <option> tags to the desired columns based on the unique values
function updateSelectOptions(unique_col_values_dict) {
    var allFilters = document.querySelectorAll(".table-filter");

    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute('col-index');

        unique_col_values_dict[col_index].forEach((value) => {
            var option = document.createElement("option");
            option.value = value;
            option.text = value;
            filter_i.appendChild(option);
        });
    });
}

// Create filter_rows() function
function filter_rows() {
    var allFilters = document.querySelectorAll(".table-filter");
    var filter_value_dict = {};

    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute('col-index');
        var value = filter_i.value;
        if (value !== "all") {
            filter_value_dict[col_index] = value;
        }
    });

    var col_cell_value_dict = {};

    var rows = document.querySelectorAll("#emp-table tbody tr");
    rows.forEach((row) => {
        var display_row = true;

        allFilters.forEach((filter_i) => {
            var col_index = filter_i.parentElement.getAttribute('col-index');
            col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index + ")").innerHTML;
        });

        for (var col_i in filter_value_dict) {
            var filter_value = filter_value_dict[col_i];
            var row_cell_value = col_cell_value_dict[col_i];

            if (row_cell_value.indexOf(filter_value) === -1 && filter_value !== "all") {
                display_row = false;
                break;
            }
        }

        if (display_row) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}
// Get unique values for the desired columns
function getUniqueValuesFromColumn() {
    var unique_col_values_dict = {};

    var allFilters = document.querySelectorAll(".table-filter");
    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute("col-index");
        var rows = document.querySelectorAll("#emp-table > tbody > tr");

        rows.forEach((row) => {
            var cell_value = row.querySelector("td:nth-child(" + col_index + ")").innerHTML;
            if (col_index in unique_col_values_dict) {
                if (unique_col_values_dict[col_index].includes(cell_value)) {
                    // Value already present in the array
                } else {
                    unique_col_values_dict[col_index].push(cell_value);
                }
            } else {
                unique_col_values_dict[col_index] = [cell_value];
            }
        });
    });

    updateSelectOptions(unique_col_values_dict);
}

// Add <option> tags to the desired columns based on the unique values
function updateSelectOptions(unique_col_values_dict) {
    var allFilters = document.querySelectorAll(".table-filter");

    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute('col-index');

        unique_col_values_dict[col_index].forEach((value) => {
            var option = document.createElement("option");
            option.value = value;
            option.text = value;
            filter_i.appendChild(option);
        });
    });
}

// Create filter_rows() function
function filter_rows() {
    var allFilters = document.querySelectorAll(".table-filter");
    var filter_value_dict = {};

    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute('col-index');
        var value = filter_i.value;
        if (value !== "all") {
            filter_value_dict[col_index] = value;
        }
    });

    var col_cell_value_dict = {};

    var rows = document.querySelectorAll("#emp-table tbody tr");
    rows.forEach((row) => {
        var display_row = true;

        allFilters.forEach((filter_i) => {
            var col_index = filter_i.parentElement.getAttribute('col-index');
            col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index + ")").innerHTML;
        });

        for (var col_i in filter_value_dict) {
            var filter_value = filter_value_dict[col_i];
            var row_cell_value = col_cell_value_dict[col_i];

            if (row_cell_value.indexOf(filter_value) === -1 && filter_value !== "all") {
                display_row = false;
                break;
            }
        }

        if (display_row) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}
