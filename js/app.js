// Model
var data = ko.observableArray([
            { docName: 'Doc1' },
            { docName: 'Doc2' },
            { docName: 'Doc3' },
            { docName: 'Doc4' },
            { docName: 'Doc5' },
            { docName: 'Doc6' },
            { docName: 'Doc7' },
            { docName: 'Doc8' },
            { docName: 'Doc9' },
            { docName: 'Doc10' },
            { docName: 'Doc11' },
            { docName: 'Doc12' },
            { docName: 'Doc13' }
]);


// ViewModel
var ViewModel = function(){
    var self = this;
    self.docs1 = data;
    self.docs2 = ko.observableArray();

    self.moveItems = ko.computed(function() {
        if (self.docs1().length > 8) {
            return self.docs2().push.apply(self.docs2(), self.docs1().splice(8)) && self.docs1().splice(8);
        }
        else {
            $(".expand_collapse").hide();
        }
    });
}

// When the link "Показать все\Свернуть"" clicked second part of documents array will expanded\collapsed
function listExpandCollapse()
    {
        var expand = $(".expand_collapse").html();

        if (expand == "Показать все")
            {
                $('.pane2').slideToggle('slow');
                $(".expand_collapse").html("Свернуть");
            }
        else
            {
                $('.pane2').slideToggle('slow');
                $(".expand_collapse").html("Показать все");
            }
    }

// Create new object of ViewModel()
var viewModel = new ViewModel();

// Make bindings between Model and View
ko.applyBindings(viewModel);