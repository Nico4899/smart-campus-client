# script to generate ts and js files from proto files
# change the necessary variables and run from project root

# variables, set out directory as wished, keep ts gen path as given
# change to your absolute dir
ABSOLUTE_DIR="C:\Users\basti\Desktop\uismartcampus"
PROTOC_OUT_DIR="${ABSOLUTE_DIR}/src/proto/generated"

# create out dir
mkdir -p ${PROTOC_OUT_DIR}
echo "created out dir."

protoc -I ./src/proto ./src/proto/building_management.proto \
    --js_out=import_style=commonjs,binary:${PROTOC_OUT_DIR} \
    --grpc-web_out=import_style=typescript,mode=grpcweb:${PROTOC_OUT_DIR}

protoc -I ./src/proto ./src/proto/problem_management.proto \
    --js_out=import_style=commonjs,binary:${PROTOC_OUT_DIR} \
    --grpc-web_out=import_style=typescript,mode=grpcweb:${PROTOC_OUT_DIR}
