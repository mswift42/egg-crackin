package eggcrackin

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"google.golang.org/appengine"
	"google.golang.org/appengine/urlfetch"
)

func init() {
	http.HandleFunc("/searchrecipe", getRecipes)
}

// func doGet(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Add("Access-Control-Allow-Origin", "*")
// 	w.Header().Add("Content-Type", "text/csv")
// 	fmt.Fprintf(w, csvData)
// }
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "success")
}

const (
	APIKEY  = "7987c43afcf8a03a964bbcb0c9152c84"
	BASEURL = "http://food2fork.com/api/search?key="
)

func tHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "success")
}

func getRecipes(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	query := r.FormValue("query")
	url := searchURL(query)
	ctx := appengine.NewContext(r)
	client := urlfetch.Client(ctx)
	recipes, err := client.Get(url)
	if err != nil {
		fmt.Fprintf(w, err.Error(), http.StatusInternalServerError)
	}
	body, err := ioutil.ReadAll(recipes.Body)
	if err != nil {
		http.Error(w, "couldn't read get request body", http.StatusInternalServerError)
	}
	fmt.Fprintf(w, string(body))
}

func searchURL(query string) string {
	return BASEURL + APIKEY + "&q=" + strings.Replace(query, " ", "+", 0)
}
