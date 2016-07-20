package eggcrackin

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func init() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/searchRecipe", getRecipes)
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

func getRecipes(w http.ResponseWriter, r *http.Request) {
	query := r.FormValue("query")
	url := BASEURL + APIKEY + "&q=" + query
	recipes, err := loadRecipe(BASEURL + url)
	if err != nil {
		fmt.Fprintf(w, err.Error(), http.StatusInternalServerError)
	}
	fmt.Fprintf(w, string(recipes))
}

func loadRecipe(url string) ([]byte, error) {
	r, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer r.Body.Close()

	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		return nil, err
	}
	return body, nil

}
