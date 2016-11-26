-- Derived from
-- https://guide.elm-lang.org/architecture/user_input/buttons.html

import Dom
import Html exposing (beginnerProgram, div, p, button, text, input)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick)

main =
  beginnerProgram { model = "Hello", view = view, update = update }

view model =
  div []
  [
     input [ id "input", onInput Set, value model ] [],
     p [] [ (text model), (text ", World")  ],
     button [ onClick Clear ] [ text "Clear" ]
  ]


type Msg = Set String | Clear


--update : Msg -> String
update msg model =
  case msg of
    Clear ->
        let
            -- todo: how to execute this??? (https://github.com/evancz/elm-todomvc/blob/master/Todo.elm)
            focus = Dom.focus "input"
        in
            ""

    Set text ->
      text
