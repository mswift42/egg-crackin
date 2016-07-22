package eggcrackin

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSearchUrl(t *testing.T) {
	assert := assert.New(t)
	url := searchUrl("eggs")
	assert.Equal(url, "http://food2fork.com/api/search?key=7987c43afcf8a03a964bbcb0c9152c84&q=eggs")
}

func TestSearchRecipe(t *testing.T) {
	resp := httptest.NewRecorder()
	uri := "/searchrecipe/?query=eggs"
	req, err := http.NewRequest("GET", uri, nil)
	if err != nil {
		t.Fatal(err)
	}
	http.DefaultServeMux.ServeHTTP(resp, req)
	if p, err := ioutil.ReadAll(resp.Body); err != nil {
		t.Fail()
	} else {
		if strings.Contains(string(p), "Error") {
			t.Errorf("header response shouldn't return error: %s", p)
		}
		if !strings.Contains(string(p), "eggs") {
			t.Errorf("header response doesn't match:\n%s ", p)
		}
	}

}
