# script to generate ts and js files from proto files
# change the necessary variables and run from project root

# variables, set out directory as wished, keep ts gen path as given
# change to your absolute dir
ABSOLUTE_DIR="C:\Users\basti\Desktop\SmartCampus\uismartcampus"
PROTOC_GEN_TS_PATH="${ABSOLUTE_DIR}/node_modules/.bin/protoc-gen-ts.cmd"
PROTOC_OUT_DIR="${ABSOLUTE_DIR}/src/proto/generated"

# create out dir
mkdir -p ${PROTOC_OUT_DIR}
echo "created out dir."
# generate bm proto files
protoc \
       --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
       --js_out="import_style=commonjs,binary:${PROTOC_OUT_DIR}" \
       --ts_out="service=grpc-web:${PROTOC_OUT_DIR}" \
       -I ./src/proto ./src/proto/problem_management.proto
echo "generated building_management.proto files."

# generate pm proto files
protoc \
      --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
      --js_out="import_style=commonjs,binary:${PROTOC_OUT_DIR}" \
      --ts_out="service=grpc-web:${PROTOC_OUT_DIR}" \
      -I ./src/proto ./src/proto/building_management.proto
echo "generated problem_management.proto files."
