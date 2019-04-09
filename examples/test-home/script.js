
$(document).ready(function() {
    window.ToM = window.ToM || (window.top && window.top.ToM) || {};

    $('h2.section-title').click(function() {
        $(this).next('.section-container').toggle();
    });

    var displayResult = function(result) {
        $('#format-result').html("");
        $('#result').html(JSON.stringify(result, null, 2));
        $('#reset').show();
        $('.section-container').hide();
        resizeFrame();
    }

    $('form.data-args').submit(function(e) { e.preventDefault(); });

    $('.test-data').click(function() {
        var method = $(this).data('method');
        if (!method) {
            return;
        }

        var formatMethod = $(this).data('format-method');
        var args = [];
        if ($(this).hasClass('with-args')) {
            $(this).closest('form').find('input').each(function(i, input) {
                args.push($(input).val());
            });
        }

        executeFunctionByName(method, window, args).then(function(result) {
            if (!result) {
                return;
            }
            displayResult(result);
            if (formatMethod) {
                executeFunctionByName(formatMethod, window, [result]);
            }
        });
    });

    $('.test-search').click(function() {
        var searchQuery = $('#search-input').val();
        ToM.navigation.displaySearch(searchQuery);
    });

    function resetAll() {
        $('#result').html("");
        $('#format-result').html("");
        $('#reset').hide();
        $('input.text-input').val("");
        $('.section-container').show();
        resizeFrame();
    }

    $('#reset').click(resetAll);

});

function executeFunctionByName(functionName, context, args) {
    // var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}


function resizeFrame() {
    if (window.top && window.top.SetIframeSize) {
        window.top.SetIframeSize();
    }
}


/**
 * FORMAT METHODS
 */
function formatCategories(result) {
    $("#format-result").html("");
    $.each(result, function(index, category) {
        _formatCategoryHelper(category)
    });
    resizeFrame();
}

function formatCategory(result) {

    $("#format-result").html("");
    _formatCategoryHelper(result)
    resizeFrame();

}
function _formatCategoryHelper(result) {

    $("<div class=\"\">"
    + "<a class=\"item-link displayCategory\">&gt; "+result.title+" ("+result.id+")</a> "
    + "</div>")
    .appendTo("#format-result")
    .delegate("a.displayCategory", "click", function() {
        ToM.navigation.displayCategory(result.id)
    });
    resizeFrame();

}

function formatFeaturedCommunications(result) {
    $("#format-result").html("");
    $.each(result, function(index, comm) {
        _createThumbnail({img: comm.featuredImage.url, text: comm.title + "<br/><em>type: "+ comm.type + "</em>"})
        .appendTo("#format-result")
        .click(function() {
            ToM.navigation.displayCommunication(comm.id)
        });
    });
    resizeFrame();
}

function formatProfile(profile) {
    $("#format-result").html("");
    _createThumbnail({
        img: profile.avatar.url,
        text: profile.firstname
            +" "+profile.lastname+"<br/>"
            + profile.email + ""
        })
    .appendTo("#format-result")
    .click(function() {
        ToM.navigation.displayProfile()
    });
    resizeFrame();
}

function _createThumbnail(data) {
    return $("<div class=\"item-thumbnail\">"
    + "<img src=\""+data.img+"\">"
    + "<span>" + data.text + "</span>"
    + "</div>");
}

function formatTrainingCourses(result) {
    $("#format-result").html("");
    $.each(result, function(index, training) {
        _createThumbnail({img: training.cover.url, text: training.title + "<br/><em>code: "+ training.id + "</em>"})
        .appendTo("#format-result")
        .click(function() {
            ToM.navigation.displayTrainingCourse(training.id)
        });
    });
    resizeFrame();
}