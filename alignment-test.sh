NODE_OUTPUT="$(node test.js)"
PYTHON_OUTPUT="$(python3.7 test.py)"

if [ "$NODE_OUTPUT"  == "$PYTHON_OUTPUT" ]; then
  echo "node output is equal to python output."
fi
