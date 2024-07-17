package valid_anagram

import "testing"

func TestIsAnagram_Example1(testing *testing.T) {
	s := "anagram"
	t := "nagaram"
	expected := true
	result := isAnagram(s, t)
	if result != expected {
		testing.Errorf("isAnagram(%q, %q) = %v; want %v", s, t, result, expected)
	}
}

func TestIsAnagram_Example2(testing *testing.T) {
	s := "rat"
	t := "car"
	expected := false
	result := isAnagram(s, t)
	if result != expected {
		testing.Errorf("isAnagram(%q, %q) = %v; want %v", s, t, result, expected)
	}
}

func TestIsAnagram_DifferentLengths(testing *testing.T) {
	s := "hello"
	t := "helloo"
	expected := false
	result := isAnagram(s, t)
	if result != expected {
		testing.Errorf("isAnagram(%q, %q) = %v; want %v", s, t, result, expected)
	}
}

func TestIsAnagram_EmptyStrings(testing *testing.T) {
	s := ""
	t := ""
	expected := true
	result := isAnagram(s, t)
	if result != expected {
		testing.Errorf("isAnagram(%q, %q) = %v; want %v", s, t, result, expected)
	}
}

func TestIsAnagram_SingleCharacterSame(testing *testing.T) {
	s := "a"
	t := "a"
	expected := true
	result := isAnagram(s, t)
	if result != expected {
		testing.Errorf("isAnagram(%q, %q) = %v; want %v", s, t, result, expected)
	}
}

func TestIsAnagram_SingleCharacterDifferent(testing *testing.T) {
	s := "a"
	t := "b"
	expected := false
	result := isAnagram(s, t)
	if result != expected {
		testing.Errorf("isAnagram(%q, %q) = %v; want %v", s, t, result, expected)
	}
}
