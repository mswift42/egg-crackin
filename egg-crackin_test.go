package eggcrackin

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"google.golang.org/appengine/aetest"
)

func TestSearchURL(t *testing.T) {
	assert := assert.New(t)
	url := searchURL("eggs")
	assert.Equal(url, "http://food2fork.com/api/search?key=7987c43afcf8a03a964bbcb0c9152c84&q=eggs")
}

func TestSearchRecipe(t *testing.T) {
	inst, err := aetest.NewInstance(nil)
	if err != nil {
		t.Fatal(err)
	}
	defer inst.Close()
	resp := httptest.NewRecorder()
	uri := "/searchrecipe?query=eggs"
	req, err := inst.NewRequest("GET", uri, nil)
	// ctx, done, err := aetest.NewContext()
	// if err != nil {
	// 	t.Fatal(err)
	// }
	if rf := req.FormValue("query"); rf != "eggs" {
		t.Errorf("form value doesn't match: ", rf)
	}
	if err != nil {
		t.Fatal(err)
	}
	http.DefaultServeMux.ServeHTTP(resp, req)
	if p, err := ioutil.ReadAll(resp.Body); err != nil {
		t.Fail()
	} else {
		if strings.Contains(string(p), "error") {
			t.Errorf("header response shouldn't return error: %s", p)
		}
		if !strings.Contains(string(p), "recipes") {
			t.Errorf("header response doesn't match:\n%s ", p)
		}
	}
	uri = "/searchrecipe?query=cream+mushrooms"
	nreq, err := http.NewRequest("GET", uri, nil)
	if rf := nreq.FormValue("query"); rf != "cream mushrooms" {
		t.Errorf("form value doesnt't match : %s", rf)
	}
	if err != nil {
		t.Fatal(err)
	}
	http.DefaultServeMux.ServeHTTP(resp, nreq)
	if p, err := ioutil.ReadAll(resp.Body); err != nil {
		t.Fail()
	} else {
		if strings.Contains(string(p), "error") {
			t.Errorf("header shouldn't return error: %s", p)
		}
	}

}
