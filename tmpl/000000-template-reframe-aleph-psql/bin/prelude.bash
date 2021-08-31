set -e # stop on error
[ -n "$DEBUG" ] && set -v

function wait_for_user {
  read -n 1 -r -s -p $'Press any key when this is done...\n'
}

function ohai {
  info='\e[1;32m' # bold green
  nocolor='\e[0m'
  if [[ "$OSTYPE" =~ ^linux ]]; then
    echo -e "${info}$1${nocolor}"
  elif [[ "$OSTYPE" =~ ^darwin ]]; then
    printf "${info}$1${nocolor}"
  fi
}

function manual_step {
  # see https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/
  ohai "=> $1\n"
  wait_for_user
}
